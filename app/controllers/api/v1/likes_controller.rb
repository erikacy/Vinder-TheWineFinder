class Api::V1::LikesController < ApiController

  def create
    wine = Wine.find(params["wine_id"])
    likes = Like.where(wine: params[:wine_id])
    existing = likes.where(user: current_user)

    if existing == []
      Like.create(
        wine: wine,
        user: current_user)

      render json: likes
    else
      render json: likes
    end
  end

  def destroy
    wine = Wine.find(params["wine_id"])
    user = current_user
    Like.find(user: user, wine: wine).destroy
  end

  protected
  def like_params
  params.require(:like)
  end
end
