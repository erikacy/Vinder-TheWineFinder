class Api::V1::WinesController < ApiController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    if current_user
      list = current_user.recommend_wines(current_user).sample(4)
      render json: list
    else
      render json: Wine.all.sample(4)
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
      render json: { errors: wine.errors.full_messages }
    end
  end

  def search
    @wines = Wine.where("country ILIKE ? AND region ILIKE ? AND description ILIKE ? AND variety ILIKE ? AND title ILIKE ? AND winery ILIKE ?", "%#{params['search_strings']['country']}%",
    "%#{params['search_strings']['region']}%",
    "%#{params['search_strings']['description']}%",
    "%#{params['search_strings']['variety']}%",
    "%#{params['search_strings']['title']}%",
    "%#{params['search_strings']['winery']}%")
    render json: @wines
  end


  protected
  def wine_params
  params.require(:wine).permit(:country,:description,:designation,:score,:price,:province,:region,:title, :user, :variety, :winery)
  end

end
