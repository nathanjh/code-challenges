require_relative '../walk_test'

describe Walk do
  it 'can validate a given set of directions' do
    # test_1 = ['n','s','n','s','n','s','n','s','n','s']
    # expect(Walk.is_valid_walk(test_1)).to eq true
    #
    # test_2 = ['w','e','w','e','w','e','w','e','w','e','w','e']
    # expect(Walk.is_valid_walk(test_2)).to eq false
    #
    # test_3 = ['w']
    # expect(Walk.is_valid_walk(test_3)).to eq false
    #
    # test_4 = ['n','n','n','s','n','s','n','s','n','s']
    # expect(Walk.is_valid_walk(test_4)).to eq false
    #
    test_5 = ['n', 's', 'e', 'w', 'e', 's', 'e', 'w', 'n', 's']
    expect(Walk.is_valid_walk(test_5)).to eq false
  end

end
