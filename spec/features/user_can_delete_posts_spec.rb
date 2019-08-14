require 'rails_helper'

RSpec.feature "Timeline", type: :feature do
  scenario "Can delete posts" do
    create_user
    click_button "New post"
    fill_in 'post_text', :with => "Hello, world!"
    click_button "New post"

    click_link "Delete"
    expect(page).not_to have_content("Hello, world!")
  end
end
