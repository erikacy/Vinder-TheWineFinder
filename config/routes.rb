Rails.application.routes.draw do
  root 'static_pages#index'

  get '/wines', to: "static_pages#index"
  get '/wines/:id', to: "static_pages#index"
  get '/', to: "static_pages#index"
  get '/new', to: "static_pages#index"
  get '/search', to: "static_pages#index"
  get '/pairs', to: "static_pages#index"
  get '/user_wines', to: "static_pages#index"

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      post "/search", to: "wines#search"
      get "/user_wines", to: "wines#user_wines"
      resources :wines, only: [:index, :show, :create] do
        resources :likes, only: [:create, :destroy]
      end
    end
  end
end
