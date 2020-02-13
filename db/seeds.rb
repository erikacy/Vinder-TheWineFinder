# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'
require 'faker'
include Faker

Wine.destroy_all
User.destroy_all
Like.destroy_all

CSV.foreach(Rails.root.join('./lib/seeds/test_2.csv'), headers: true) do |row|
  a = row.to_hash
  Wine.create({
    country: a["country"],
    description: a["description"],
    designation: a["designation"],
    score: a["points"],
    price: a["price"],
    province: a["province"],
    region: a["region_1"],
    title: a["title"],
    variety: a["variety"],
    winery: a["winery"]
    })
end

200.times do
  User.create(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: Faker::Internet.email,
  password: '123456789',
  password_confirmation: '123456789'
  )
end
#
2000.times do
  Like.create(
    user: User.all.sample,
    wine: Wine.all.sample
  )
end

# 2000.times do
#   user = User.all[rand(0...200)]
#   wine = Wine.all[rand(0...600)]
#   if user.wines.include?(wine)
#     next
#   else
#     user.wines << wine
#   end
# end
