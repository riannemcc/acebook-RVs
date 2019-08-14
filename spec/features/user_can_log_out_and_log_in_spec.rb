require 'rails_helper'

RSpec.feature "Timeline", type: :feature do
  scenario "Can sign up and log in" do
    create_user
    click_link "Log out"
    fill_in "Email", with: "tim@tim.tim"
    fill_in "Password", with: "chuckles"
    click_button "Log in"
    expect(page).to have_content("Welcome to Acebook, tim!")
  end
end
