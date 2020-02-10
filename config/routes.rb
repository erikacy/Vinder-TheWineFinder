Rails.application.routes.draw do
  root 'static_pages#index'

  get '/', to: "static_pages#index"
  get '/wines', to: "static_pages#index"
  get '/wines/:id', to: "static_pages#index"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
