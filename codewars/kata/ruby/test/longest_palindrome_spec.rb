require_relative '../longest_palindrome'

describe Palindrome do
  it 'returns 1 for a' do
    expect(Palindrome.longest_palindrome('a')).to eq 1
  end

  it 'returns 2 for aa' do
    expect(Palindrome.longest_palindrome('aa')).to eq 2
  end

  it 'returns 2 for baa' do
    expect(Palindrome.longest_palindrome('baa')).to eq 2
  end

  it 'returns 2 for aab' do
    expect(Palindrome.longest_palindrome('aab')).to eq 2
  end

  it 'returns 4 for baabcd' do
    expect(Palindrome.longest_palindrome('baabcd')).to eq 4
  end

  it 'returns 9 for baablkj12345432133d' do
    expect(Palindrome.longest_palindrome('baablkj12345432133d')).to eq 9
  end

  it 'returns 0 for "" ' do
    expect(Palindrome.longest_palindrome('')).to eq 0
  end

  it 'returns 7 for "I like racecars that go fast"' do
    str = 'I like racecars that go fast'
    expect(Palindrome.longest_palindrome(str)).to eq 7
  end
end
