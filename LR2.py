import webbrowser
import time

webpages = [
    "https://www.gosuslugi.ru",
    "https://www.rzd.ru",
    "https://www.rzd.ru",
]

interval = 5

def open_webpages(webpages, interval):
    for webpage in webpages:
        print(f"Открываю страницу: {webpage}")
        webbrowser.open(webpage)
        time.sleep(interval)

if __name__ == "__main__":
    open_webpages(webpages, interval)
    


