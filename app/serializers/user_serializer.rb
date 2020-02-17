class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :current_user

  has_many :likes
  has_many :wines, through: :likes

  def current_user
   scope
  end

end
