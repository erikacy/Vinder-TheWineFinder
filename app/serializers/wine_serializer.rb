class WineSerializer < ActiveModel::Serializer
  attributes :id, :country, :description, :designation, :score, :price, :province, :region, :title, :variety, :winery

  has_many :likes
  has_many :users, through: :likes

end
