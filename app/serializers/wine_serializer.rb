class WineSerializer < ActiveModel::Serializer
  attributes :country, :description, :designation, :score, :price, :province, :region, :title, :variety, :winery, :current_user


  def current_user
    object.user == scope
  end
end
