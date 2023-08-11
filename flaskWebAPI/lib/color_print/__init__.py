# https://stackoverflow.com/questions/287871/how-do-i-print-colored-text-to-the-terminal
from lib.color_print.term_colors import Colors
class ColorPrint:
    @staticmethod
    def print_warning(text):
        print(Colors.WARNING + text + Colors.ENDC)
    @staticmethod
    def print_error(text):
        print(Colors.FAIL + text + Colors.ENDC)
    @staticmethod
    def print_ok(text):
        print(Colors.OKGREEN + text + Colors.ENDC)
    @staticmethod
    def print_bold(text):
        print(Colors.BOLD + text + Colors.ENDC)
    @staticmethod
    def print_underline(text):
        print(Colors.UNDERLINE + text + Colors.ENDC)
    @staticmethod
    def print_header(text):
        print(Colors.HEADER + text + Colors.ENDC)
    @staticmethod
    def print_cyan(text):
        print(Colors.OKCYAN + text + Colors.ENDC)
    @staticmethod
    def print_blue(text):
        print(Colors.OKBLUE + text + Colors.ENDC)
        

        