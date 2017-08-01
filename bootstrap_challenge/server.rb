require 'sinatra'

get "/" do
	File.read('./public/bitcoin_bootstrap.html')
end