  const comments = [
    {
      commentId: 1,
      commentContent: 'Hai',
      replies: [
        {
          commentId: 11,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 111,
              commentContent: 'Haai juga hai jugaa'
            },
            {
              commentId: 112,
              commentContent: 'Haai juga hai jugaa'
            }
          ]
        },
        {
          commentId: 12,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 121,
              commentContent: 'Haai juga hai jugaa'
            }
          ]
        }
      ]
    },
    {
      commentId: 2,
      commentContent: 'Halooo'
    }
  ];
  

  function countComments(comments) {
    let total = 0;
  
    comments.forEach(comment => {
      // Cek apakah commentContent tidak kosong sebelum menghitung
      if (comment.commentContent.length !== 0) {
        // Tambahkan komentar utama
        total += 1;
      }
  
      // Jika ada balasan, hitung jumlah balasan secara rekursif
      if (comment.replies) {
        total += countComments(comment.replies);
      }
    });
  
    return total;
  }


  
  
  const totalComments = countComments(comments);
  console.log(`Total komentar: ${totalComments}`);
  