# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Coffeeshop.destroy_all
Roast.destroy_all

5.times do
  foo = Coffeeshop.create(name: Faker::FunnyName.name, location: Faker::Address.city)
  4.times do
    foo.roasts.create(name: Faker::Name.first_name, profile: Faker::Food.description)
  end

end

puts "seeded #{Coffeeshop.all.size} Coffee Shops"
puts "first Coffee Shop name: #{Coffeeshop.first.name}"
puts "seeded #{Roast.all.size} Roasts in #{Coffeeshop.all.size} Coffee Shops"
