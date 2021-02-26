# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Coffeeshop.destroy_all

5.times do
  Coffeeshop.create(name: Faker::FunnyName.name, location: Faker::Address.city)

end

puts "seeded #{Coffeeshop.all.size} Coffee Shops"
puts "first Coffee Shop name: #{Coffeeshop.first.name}"
