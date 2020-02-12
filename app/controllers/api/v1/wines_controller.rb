class Api::V1::WinesController < ApiController
  def index
    render json: Wine.all.sample(5)
  end

  def show
    wine = Wine.find(params["id"])
    render json: wine, serializer: WineSerializer
  end

  def create
    wine = Wine.new(wine_params)
    wine.user = current_user
    if wine.save
      render json: wine
    else
      render json: { errors: cape.errors.full_messages }
    end

  end

  protected
  def wine_params
  params.require(:wine).permit(:country,:description,:designation,:score,:price,:province,:region,:title, :user, :variety, :winery)
  end

end
