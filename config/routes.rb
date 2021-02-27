Rails.application.routes.draw do
  root "coffeeshops#index"
  resources :coffeeshops
end
