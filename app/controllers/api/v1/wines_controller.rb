class Api::V1::WinesController < ApiController
  def index
    render json: Wine.all.sample(10)
  end

  def show
    wine = Wine.find(params["id"])
    render json: wine, serializer: WineSerializer
  end

end
