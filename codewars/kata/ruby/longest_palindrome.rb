## methods associated with/ created while solving 'longest palindrome' kata
module Palindrome
  module_function

  # finds longest run of repeated letters
  def repeat_letters(str)
    pals = []
    str.each_char do |char|
      current_pal = char
      until char != str[str.index(char) + current_pal.length]
        current_pal += str[str.index(char) + current_pal.length]
      end
      pals << current_pal
    end
    pals.max_by(&:length)
  end

  # only works for odd-numbered palindromes!
  def palindrome_finder(str, target) # target is current element of enumerable
    index1 = str.index(target) - 1
    index2 = str.index(target) + 1
    subs = []
    while str[index1] == str[index2] && index1 >= 0
      subs << str[index1..index2]
      index1 -= 1
      index2 += 1
    end
    subs.max_by(&:length)
  end

  # works but perhaps a better solution possible using regex?
  def longest_palindrome(str)
    return 0 if str.length.zero?
    str = str.split.join
    a = []
    str.each_char do |char|
      a << pal_collector(str, char)
    end
    a.max_by(&:length).length
  end

  def pal_collector(str, char)
    substr = ''
    pal = ''
    i = str.index(char)
    while i < str.length
      substr += str[i]
      pal = substr if substr == substr.reverse && substr.length > pal.length
      i += 1
    end
    pal
  end
end
# input is a string, returns an integer giving the length of
# longest palindrome substring
# remove spaces!!!!
# create a longest_palindrome variable to store current longest palindrome
# iterate over string
# for each character
# test next character, if same, write to variable
# repeat until different character is encountered

# if length of string is more than two
# iterate over string starting at element at index 1 and continue until element
# at index length of string minus two
# for each,
# check char at next and previous indices for equality
# if equal,
# keep checking characters at by moving one forward and one backward in
# the string until they no longer match
# slice substring at last matching indices
# push to array of substrings if longer than longest substring already in array
# return the longest substring in the array
