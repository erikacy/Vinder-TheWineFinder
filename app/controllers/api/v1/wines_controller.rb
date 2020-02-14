class Api::V1::WinesController < ApiController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    if current_user
      list = current_user.recommend_wines(current_user).sample(6)
      render json: list
    else
      render json: Wine.all.sample(3)
    end
  end

  def show
    wine = Wine.find(params["id"])
    render json: wine, serializer: WineSerializer
  end

  def create
    wine = Wine.new(wine_params)
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
