class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name

  has_many :likes
  has_many :wines, through: :likes
end
