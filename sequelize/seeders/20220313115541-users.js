module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        
        id: 1,
        displayName: "Brett Wiltshire",
        email: "brett@email.com", // tem quer ser único
        password: "123456",
        image: "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
      },

    ])
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};