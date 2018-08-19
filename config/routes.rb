Rails.application.routes.draw do
  namespace :api do
    get 'todo_lists/index'
  end

  namespace :api do
    get 'todo_lists/create'
  end

  namespace :api do
    get 'todo_lists/show'
  end

  namespace :api do
    get 'todo_lists/update'
  end

  namespace :api do
    get 'todo_lists/destroy'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
