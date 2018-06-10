import * as model from '../model'

class Test {
  static async isValid () {
    const novelId = 'UUID'
    const tags = ['#가나다마', '#마바아', '#테스트2'] //test hashtags

    await model.Hashtag.createTags({ novel: novelId, tags })
  }
}

Test.isValid().catch((error) => { console.error(error)})
