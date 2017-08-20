require 'sinatra'

get "/" do
	File.read(File.join("public", "twitter.html"))
end