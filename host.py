from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

class CustomHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith("/Ultramodding"):
            self.path = self.path.replace("/Ultramodding", "", 1)
        return super().do_GET()

if __name__ == "__main__":
    port = 5500
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = HTTPServer(('localhost', port), CustomHandler)
    print(f"Serving at http://localhost:{port}")
    server.serve_forever()
