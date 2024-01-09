
#include <iostream>
#include <boost/asio.hpp>

using namespace boost::asio;
using ip::tcp;

int main() {
    io_service io;
    tcp::acceptor acceptor(io, tcp::endpoint(tcp::v4(), 8080));

    while (true) {
        tcp::socket socket(io);
        acceptor.accept(socket);

        std::string message = "HTTP/1.1 200 OK\r\nContent-Length: 13\r\n\r\nHello, World!";
        boost::system::error_code ignored_error;
        write(socket, buffer(message), ignored_error);
    }

    return 0;
}
