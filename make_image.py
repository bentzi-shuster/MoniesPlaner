import os
import openai
from dotenv import load_dotenv
load_dotenv()
openai.api_key = os.getenv("OPENAI_TOKEN")
# image_prompt =input("Enter the prompt: ")
# response = openai.Image.create(
#   prompt=image_prompt,
#   n=1,
#   size="256x256"
# )
# image_url = response['data'][0]['url']
# print(image_url)

def make_image(image_prompt):
    response = openai.Image.create(
        prompt=image_prompt,
        n=1,
        size="256x256"
    )
    image_url = response['data'][0]['url']
    return image_url