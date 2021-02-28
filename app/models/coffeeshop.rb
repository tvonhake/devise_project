class Coffeeshop < ApplicationRecord
  has_many :roasts, dependent: :destroy 
end
