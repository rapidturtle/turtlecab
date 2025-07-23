require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "has a home page" do
    get root_path
    assert_response :success
  end

  test "has an about page" do
    get about_path
    assert_response :success
  end

  test "has a contact page" do
    get contact_path
    assert_response :success
  end

  test "has a pricing page" do
    get pricing_path
    assert_response :success
  end

  test "has a rides page" do
    get rides_path
    assert_response :success
  end
end
