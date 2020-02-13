class Api::V1::LikesController < ApiController

  def create
    wine = Wine.find(params["wine_id"])
    Like.create(
      wine: wine,
      user: current_user
    )
    likes = Like.where(wine: params[:wine_id])
    render json: wine.likes.count
  end

end
