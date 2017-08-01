require 'sinatra'

get "/" do
	File.read('./public/bitcoin.html')
end