const dataClothes = [
    {
         id: 1,
         name: "Women's Casual Short Sleeve T Shirts",
         category: "SHIRT STYLE",
         price: 15.99,
         about: "Great for layering or wearing alone, this smooth cotton T-shirt features a ribbed crewneck, straight hem, short sleeves, and a tag-free neck for everyday comfort Model is 6'2 and wearing a size Medium",
         image: "https://images.unsplash.com/photo-1496360938681-9a918bfabc66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      },
      {
          id: 2,
          name: "Men's Nanoflex Cross Trainer",
          category: "LOVE SHOES",
          price: 26.99,
          about: "Ultra flexible, lightweight, and durable TPR outsole with minimalist heel, and traction grip forepart. Padded insole with 6mm high quality memory foam for supreme cushioning and comfort; Faux leather sock with natural hand and feel. Classic and versatile flat designed for daily wear and superior fit",
          image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
          id: 3,
          name: "Shaping Skinny Jeans",
          category: "THE PERFECT JEANS!",
          price: 22.99,
          about: "A timelessly chic jean designed for both style and comfort. Built to contour curves, lengthen legs and celebrate your form. Made with an innovative tummy-slimming panel. Levi's Sculpt with Hypersoft is super-soft for enhanced comfort with supportive stretch.",
          image: "https://images.unsplash.com/photo-1599447541321-50706296bb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
        },
        {
          id: 4,
          name: "Womens Casual Daily Jackets Lightweight ",
          category: "LIGHT JACKET",
          price: 32.99,
          about: "Comfy Material: cotton,polyester and spandex,the material is thick and comfortable,keep you warm in fall and winter. Please Refer to the EFAN Size Chart before Ordering(NOT AMAZON SIZE). Any other questions, please contact us freely",
          image: "https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
          id: 5,
          name: "High Waisted Soft Workout Shorts",
          category: "COMFY SHORTS",
          price: 13.99,
          about: "Material:73% Cotton/14% Rayon/11% Polyester/2% Spandex. Size Detail : Small: Waist: 26, Hips: 34； Medium: Waist: 28,Hips: 36； Large: Waist: 30, Hips: 38 ； X-Large: Waist: 32, Hips: 40 ； XX-Large: Waist: 34, Hips: 42 Machine Wash or Hand Wash, Size S ,M ,L ,XL,XXL , Just CHOOSE THE SIZE AS YOU USUALLY WEAR",
          image: "https://images.unsplash.com/photo-1634748210255-af588c16652a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
          id: 6,
          name: "Women Sleeveless Dresses",
          category: "NICE DRESSES",
          price: 42.99,
          about: "This is the perfect dress for a classy, modern wedding, and would especially suit an outdoor wedding in the garden. Occasion:Bohemian beach wedding, garden wedding, park wedding, church wedding, vintage wedding, country wedding, formal party, prom and other special occasion. Ever-Pretty gives you stylish and affordable dresses with unique design. You deserve this beautiful wedding dress for your special day.",
          image: "https://images.unsplash.com/photo-1612878569417-a62601be8d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
          id: 7,
          name: "Long Sleeve Comfort",
          category: "SHIRT STYLE",
          price: 17.99,
          about: "Great for layering or wearing alone, this smooth cotton T-shirt features a ribbed crewneck, straight hem, short sleeves, and a tag-free neck for everyday comfort Model is 6'2 and wearing a size Medium",
          image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
          id: 8,
          name: "Casual Sneakers",
          category: "LOVE SHOES",
          price: 24.99,
          about: "Ultra flexible, lightweight, and durable TPR outsole with minimalist heel, and traction grip forepart. Padded insole with 6mm high quality memory foam for supreme cushioning and comfort; Faux leather sock with natural hand and feel. Classic and versatile flat designed for daily wear and superior fit",
          image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
          },
          {
          id: 9,
          name: "Men's Relaxed Fit Tapered Leg Jean",
          category: "THE PERFECT JEANS!",
          price: 17.99,
          about: "A timelessly chic jean designed for both style and comfort. Built to contour curves, lengthen legs and celebrate your form. Made with an innovative tummy-slimming panel. Levi's Sculpt with Hypersoft is super-soft for enhanced comfort with supportive stretch.",
          image: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          },
          {
          id: 10,
          name: "Womens Jacket Zip Up Snap Buttons",
          category: "LIGHT JACKET",
          price: 35.99,
          about: "Comfy Material: cotton,polyester and spandex,the material is thick and comfortable,keep you warm in fall and winter. Please Refer to the EFAN Size Chart before Ordering(NOT AMAZON SIZE). Any other questions, please contact us freely",
          image: "https://images.unsplash.com/photo-1599839575784-3f3bf15cb473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
          },
          {
          id: 11,
          name: "Women's Original Shorts",
          category: "COMFY SHORTS",
          price: 15.99,
          about: "Material:73% Cotton/14% Rayon/11% Polyester/2% Spandex. Size Detail : Small: Waist: 26, Hips: 34； Medium: Waist: 28,Hips: 36； Large: Waist: 30, Hips: 38 ； X-Large: Waist: 32, Hips: 40 ； XX-Large: Waist: 34, Hips: 42 Machine Wash or Hand Wash, Size S ,M ,L ,XL,XXL , Just CHOOSE THE SIZE AS YOU USUALLY WEAR",
          image: "https://images.unsplash.com/photo-1570112743508-3ddfe3393502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          },
          {
          id: 12,
          name: "Women's Long Crepe Gown",
          category: "NICE DRESSES",
          price: 20.99,
          about: "This is the perfect dress for a classy, modern wedding, and would especially suit an outdoor wedding in the garden. Occasion:Bohemian beach wedding, garden wedding, park wedding, church wedding, vintage wedding, country wedding, formal party, prom and other special occasion. Ever-Pretty gives you stylish and affordable dresses with unique design. You deserve this beautiful wedding dress for your special day.",
          image: "https://images.unsplash.com/flagged/photo-1576572093163-83b5ad089423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          },
          {
          id: 13,
          name: "Men's Classic Fit Short Sleeve ",
          category: "SHIRT STYLE",
          price: 15.99,
          about: "Great for layering or wearing alone, this smooth cotton T-shirt features a ribbed crewneck, straight hem, short sleeves, and a tag-free neck for everyday comfort Model is 6'2 and wearing a size Medium",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            },
            {
          id: 14,
          name: "Women' slip on sandal",
          category: "LOVE SHOES",
          price: 10.99,
          about: "Ultra flexible, lightweight, and durable TPR outsole with minimalist heel, and traction grip forepart. Padded insole with 6mm high quality memory foam for supreme cushioning and comfort; Faux leather sock with natural hand and feel. Classic and versatile flat designed for daily wear and superior fit",
          image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              },
              {
          id: 15,
          name: "Levi's Women's New Jeans",
          category: "THE PERFECT JEANS!",
          price: 15.99,
          about: "A timelessly chic jean designed for both style and comfort. Built to contour curves, lengthen legs and celebrate your form. Made with an innovative tummy-slimming panel. Levi's Sculpt with Hypersoft is super-soft for enhanced comfort with supportive stretch.",
          image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              },
              {
          id: 16,
          name: "Windbreaker Rain Jacket",
          category: "LIGHT JACKET",
          price: 42.99,
          about: "Comfy Material: cotton,polyester and spandex,the material is thick and comfortable,keep you warm in fall and winter. Please Refer to the EFAN Size Chart before Ordering(NOT AMAZON SIZE). Any other questions, please contact us freely",
          image: "https://images.unsplash.com/photo-1618333452884-5c8d211ed2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              },
              {
          id: 17,
          name: "Men's Carrier Cargo Shorts",
          category: "COMFY SHORTS",
          price: 15.99,
          about: "Material:73% Cotton/14% Rayon/11% Polyester/2% Spandex. Size Detail : Small: Waist: 26, Hips: 34； Medium: Waist: 28,Hips: 36； Large: Waist: 30, Hips: 38 ； X-Large: Waist: 32, Hips: 40 ； XX-Large: Waist: 34, Hips: 42 Machine Wash or Hand Wash, Size S ,M ,L ,XL,XXL , Just CHOOSE THE SIZE AS YOU USUALLY WEAR",
          image: "https://images.unsplash.com/photo-1586996387152-993a91b29f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              },
              {
          id: 18,
          name: " Cocktail Long Dresses",
          category: "NICE DRESSES",
          price: 37.99,
          about: "This is the perfect dress for a classy, modern wedding, and would especially suit an outdoor wedding in the garden. Occasion:Bohemian beach wedding, garden wedding, park wedding, church wedding, vintage wedding, country wedding, formal party, prom and other special occasion. Ever-Pretty gives you stylish and affordable dresses with unique design. You deserve this beautiful wedding dress for your special day.",
          image: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=838&q=80"
              },
              {
          id: 19,
          name: "Men's Regular Fit Twill Solid Button",
          category: "SHIRT STYLE",
          price: 15.99,
          about: "Great for layering or wearing alone, this smooth cotton T-shirt features a ribbed crewneck, straight hem, short sleeves, and a tag-free neck for everyday comfort Model is 6'2 and wearing a size Medium",
          image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              },
              {
          id: 20,
          name: "High Heeled Prom Dress Shoes",
          category: "LOVE SHOES",
          price: 25.99,
          about: "Ultra flexible, lightweight, and durable TPR outsole with minimalist heel, and traction grip forepart. Padded insole with 6mm high quality memory foam for supreme cushioning and comfort; Faux leather sock with natural hand and feel. Classic and versatile flat designed for daily wear and superior fit",
          image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80"
              },
              {
          id: 21,
          name: "Women's Wedgie Straight Jeans",
          category: "THE PERFECT JEANS!",
          price: 25.99,
          about: "A timelessly chic jean designed for both style and comfort. Built to contour curves, lengthen legs and celebrate your form. Made with an innovative tummy-slimming panel. Levi's Sculpt with Hypersoft is super-soft for enhanced comfort with supportive stretch.",
          image: "https://images.unsplash.com/photo-1618308820147-529662af0bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              },
             {
          id: 22,
          name: "Rain Outdoor Jacket",
          category: "LIGHT JACKET",
          about: "Comfy Material: cotton,polyester and spandex,the material is thick and comfortable,keep you warm in fall and winter. Please Refer to the EFAN Size Chart before Ordering(NOT AMAZON SIZE). Any other questions, please contact us freely",
          price: 36.99,
          image: "https://images.unsplash.com/photo-1519235106638-30cc49b5dbc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
             },
             {
          id: 23,
          name: "Shorts for Men with Zipper Pocket",
          category: "COMFY SHORTS",
          price: 15.99,
          about: "Material:73% Cotton/14% Rayon/11% Polyester/2% Spandex. Size Detail : Small: Waist: 26, Hips: 34； Medium: Waist: 28,Hips: 36； Large: Waist: 30, Hips: 38 ； X-Large: Waist: 32, Hips: 40 ； XX-Large: Waist: 34, Hips: 42 Machine Wash or Hand Wash, Size S ,M ,L ,XL,XXL , Just CHOOSE THE SIZE AS YOU USUALLY WEAR",
          image: "https://images.unsplash.com/photo-1563643021-fc79b9e02867?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
             },
             {
          id: 24,
          name: "Long Sleeve Ruffle Waist Tie Casual Dress",
          category: "NICE DRESSES",
          price: 34.99,
          about: "This is the perfect dress for a classy, modern wedding, and would especially suit an outdoor wedding in the garden. Occasion:Bohemian beach wedding, garden wedding, park wedding, church wedding, vintage wedding, country wedding, formal party, prom and other special occasion. Ever-Pretty gives you stylish and affordable dresses with unique design. You deserve this beautiful wedding dress for your special day.",
          image: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
             },
             {
          id: 25,
          name: "Short Sleeve Shirts",
          category: "SHIRT STYLE",
          price: 25.99,
          about: "Great for layering or wearing alone, this smooth cotton T-shirt features a ribbed crewneck, straight hem, short sleeves, and a tag-free neck for everyday comfort Model is 6'2 and wearing a size Medium",
          image: "https://images.unsplash.com/photo-1522706604291-210a56c3b376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
             },
             {
          id: 26,
          name: "Office Party Dress Shoes",
          category: "LOVE SHOES",
          price: 18.99,
          about: "Ultra flexible, lightweight, and durable TPR outsole with minimalist heel, and traction grip forepart. Padded insole with 6mm high quality memory foam for supreme cushioning and comfort; Faux leather sock with natural hand and feel. Classic and versatile flat designed for daily wear and superior fit",
          image: "https://images.unsplash.com/photo-1554062097-69c634085c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
             },
             {
          id: 27,
          name: "Women's Ribcage Bootcut Jeans",
          category: "THE PERFECT JEANS!",
          price: 30.99,
          about: "A timelessly chic jean designed for both style and comfort. Built to contour curves, lengthen legs and celebrate your form. Made with an innovative tummy-slimming panel. Levi's Sculpt with Hypersoft is super-soft for enhanced comfort with supportive stretch.",
          image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
             },
             {
          id: 28,
          name: "Overcoat Long Dress Jacket",
          category: "LIGHT JACKET",
          price: 15.99,
          about: "Comfy Material: cotton,polyester and spandex,the material is thick and comfortable,keep you warm in fall and winter. Please Refer to the EFAN Size Chart before Ordering(NOT AMAZON SIZE). Any other questions, please contact us freely",
          image: "https://images.unsplash.com/photo-1507793431537-2f8f3745c5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              },
             {
          id: 29,
          name: "Men's Workout Shorts",
          category: "COMFY SHORTS",
          price: 21.99,
          about: "Material:73% Cotton/14% Rayon/11% Polyester/2% Spandex. Size Detail : Small: Waist: 26, Hips: 34； Medium: Waist: 28,Hips: 36； Large: Waist: 30, Hips: 38 ； X-Large: Waist: 32, Hips: 40 ； XX-Large: Waist: 34, Hips: 42 Machine Wash or Hand Wash, Size S ,M ,L ,XL,XXL , Just CHOOSE THE SIZE AS YOU USUALLY WEAR",
          image: "https://images.unsplash.com/photo-1604863529798-c749b3259e0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
             },
             {
          id: 30,
          name: "Beach Party Mini Dresses",
          category: "NICE DRESSES",
          price: 32.99,
          about: "This is the perfect dress for a classy, modern wedding, and would especially suit an outdoor wedding in the garden. Occasion:Bohemian beach wedding, garden wedding, park wedding, church wedding, vintage wedding, country wedding, formal party, prom and other special occasion. Ever-Pretty gives you stylish and affordable dresses with unique design. You deserve this beautiful wedding dress for your special day.",
          image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
             },
             {
          id: 31,
          name: "Classic-Fit Long-Sleeve",
          category: "SHIRT STYLE",
          price: 19.99,
          about: "Great for layering or wearing alone, this smooth cotton T-shirt features a ribbed crewneck, straight hem, short sleeves, and a tag-free neck for everyday comfort Model is 6'2 and wearing a size Medium",
          image: "https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
             },
             {
          id: 32,
          name: "Womens Walking Running Shoes",
          category: "LOVE SHOES",
          price: 20.99,
          about: "Ultra flexible, lightweight, and durable TPR outsole with minimalist heel, and traction grip forepart. Padded insole with 6mm high quality memory foam for supreme cushioning and comfort; Faux leather sock with natural hand and feel. Classic and versatile flat designed for daily wear and superior fit",
          image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
             },
             {
          id: 33,
          name: "Men's Fit Jeans",
          category: "THE PERFECT JEANS!",
          price: 27.99,
          about: "A timelessly chic jean designed for both style and comfort. Built to contour curves, lengthen legs and celebrate your form. Made with an innovative tummy-slimming panel. Levi's Sculpt with Hypersoft is super-soft for enhanced comfort with supportive stretch.",
          image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
             },
             {
         id: 34,
         name: "Windproof Windbreaker Jacket",
         category: "LIGHT JACKET",
         price: 30.99,
         about: "Comfy Material: cotton,polyester and spandex,the material is thick and comfortable,keep you warm in fall and winter. Please Refer to the EFAN Size Chart before Ordering(NOT AMAZON SIZE). Any other questions, please contact us freely",
         image: "https://images.unsplash.com/photo-1574949799899-1e9daf0b22f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=952&q=80"
             },
             {
         id: 35,
         name: "New Wyoming Womens Short",
         category: "COMFY SHORTS",
         price: 22.99,
         about: "Material:73% Cotton/14% Rayon/11% Polyester/2% Spandex. Size Detail : Small: Waist: 26, Hips: 34； Medium: Waist: 28,Hips: 36； Large: Waist: 30, Hips: 38 ； X-Large: Waist: 32, Hips: 40 ； XX-Large: Waist: 34, Hips: 42 Machine Wash or Hand Wash, Size S ,M ,L ,XL,XXL , Just CHOOSE THE SIZE AS YOU USUALLY WEAR",
         image: "https://images.unsplash.com/photo-1527280916202-fa1f7c499a7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
             },
             {
         id: 36,
         name: "Evening Cocktail Long Dress",
         searchTerm: "NICE DRESSES",
         price: 36.99,
         about: "This is the perfect dress for a classy, modern wedding, and would especially suit an outdoor wedding in the garden. Occasion:Bohemian beach wedding, garden wedding, park wedding, church wedding, vintage wedding, country wedding, formal party, prom and other special occasion. Ever-Pretty gives you stylish and affordable dresses with unique design. You deserve this beautiful wedding dress for your special day.",
         image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
             }
        
  ]
  
  export default dataClothes;