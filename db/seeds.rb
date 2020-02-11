# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

CSV.foreach(Rails.root.join('./lib/seeds/newwinedata.csv'), headers: true) do |row|
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
