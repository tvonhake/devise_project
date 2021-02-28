Rails.application.routes.draw do
  root "coffeeshops#index"
  resources :coffeeshops do
    resources :roasts
  end
end
