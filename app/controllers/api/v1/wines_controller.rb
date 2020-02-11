class Api::V1::WinesController < ApiController
  def index
    render json: Wine.all.sample(10)
  end

  def show
    render json: Wine.find(params["id"]), serializer: WineSerializer
  end

end
