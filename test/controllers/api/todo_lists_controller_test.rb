require 'test_helper'

class Api::TodoListsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_todo_lists_index_url
    assert_response :success
  end

  test "should get create" do
    get api_todo_lists_create_url
    assert_response :success
  end

  test "should get show" do
    get api_todo_lists_show_url
    assert_response :success
  end

  test "should get update" do
    get api_todo_lists_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_todo_lists_destroy_url
    assert_response :success
  end

end
