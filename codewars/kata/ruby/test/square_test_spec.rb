require_relative "../square_test"

describe Square do
  it 'returns true for 25' do
    expect(Square.square?(25)).to eq true
  end

  it 'returns false for 26' do
    expect(Square.square?(26)).to eq false
  end

  it 'returns false for -1' do
    expect(Square.square?(-1)).to eq false
  end

  it 'returns true for 1' do
    expect(Square.square?(1)).to eq true
  end

  it 'returns true for 0' do
    expect(Square.square?(0)).to eq true
  end

end
