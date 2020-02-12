class WineSerializer < ActiveModel::Serializer
  attributes :id, :country, :description, :designation, :score, :price, :province, :region, :title, :variety, :winery

end
