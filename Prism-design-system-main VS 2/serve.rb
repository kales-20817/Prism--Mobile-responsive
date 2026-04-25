require 'webrick'

server = WEBrick::HTTPServer.new(
  Port: (ENV['PORT'] || 8080).to_i,
  DocumentRoot: '/Users/kale-20817/Downloads/UEMS DS copy'
)

trap('INT') { server.shutdown }
server.start
