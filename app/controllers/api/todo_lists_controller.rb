class Api::TodoListsController < ApplicationController
  def index
    @todo_lists = TodoList.all
  end

  def show
    @todo_list = TodoList.find_by(id: params[:id])
  end

  def create
    @todo_list = TodoList.new(todo_list_params)
    if @todo_list.save
      render :show
    else
      render json: @todo_list.errors.full_messages, status: 422
    end
  end

  def update
    @todo_list = TodoList.find_by(id: params[:id])
    if @todo_list.update_attributes(todo_list_params)
      render :show
    else
      render json: @todo_list.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo_list = TodoList.find_by(id: params[:id])
    @todo_list.destroy

    render :show
  end

  private

  def todo_list_params
    params.require(:todo_list).permit(:todo)
  end
end
