require 'rails_helper'

describe Wine do

  it { should have_valid(:country).when("a country") }
  it { should_not have_valid(:country).when(nil, "") }

  it { should have_valid(:description).when("a description") }
  it { should_not have_valid(:description).when(nil, "") }

  it { should have_valid(:province).when("a province") }
  it { should_not have_valid(:province).when(nil, "") }

  it { should have_valid(:title).when("a title") }
  it { should_not have_valid(:title).when(nil, "") }

  it { should have_valid(:variety).when("a variety") }
  it { should_not have_valid(:variety).when(nil, "") }

  it { should have_valid(:winery).when("a winery") }
  it { should_not have_valid(:winery).when(nil, "") }

  it { should have_valid(:score).when(90) }
  it { should_not have_valid(:score).when(nil) }

  it { should have_valid(:price).when(50) }
  it { should_not have_valid(:price).when(nil) }

end
