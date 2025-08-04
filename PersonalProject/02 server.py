import socket

sock = socket.socket()

sock.bind(("127.0.0.1", 8080))
sock.listen(5)

while 1:
    conn, addr = sock.accept()
    data = conn.recv(1024)
    print("客户端发送的请求信息：\n", data)

    conn.sendall(b"HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=utf-8\r\n\r\nHello, World!")
    conn.close()