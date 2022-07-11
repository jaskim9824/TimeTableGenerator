import sequenceparsing

def test(input):
    return sequenceparsing.courseParse(input)

def main():
    while True:
        try:
            print(test(input()))
        except ValueError:
            print("Value Error raised!")

if __name__ == "__main__":
    main()