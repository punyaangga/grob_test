
    var nomorRow = 0;
    var urutan = ''
    var tablist = 0;
    var tabtext = [];
    tablist = "tablist"
    target_id = "#category_id";
    target_name = "#category";
    
    
    
     function tab_menu(param) {
        parent = $(param).data('param');
        if($(param).data('idx') == '0'){
          tabtext = [];
        }
        tabtext.push($(param).text());
    
    
        if(typeof $(param).data('param') == 'undefined'){
        parent = 0;
        }
        if(typeof $(param).data('main') !== 'undefined'){
    
            
          $('.coltab').remove();
          nomorRow=0;
          $(target_id).val('');
          $(target_name).val('');
        }
          if(typeof $('#urutan_'+nomorRow).data('no') !== 'undefined'){
          id = $(param).data('idx')+1;
          console.log(id,'keyid',$('.coltab').length);
              for (var i = $('.coltab').length - 1; i >= id; i--) {
               $("#urutan_"+i).remove('');
               console.log('#urutan_'+i);
               nomorRow--;
              }
            console.log(nomorRow,'before');
           nomorRow++;
            console.log(nomorRow,'after');
          }
                         res = category_data(parent);
    
                         body = '<div class="row"><div class="col-md-12 coltab" id="urutan_'+nomorRow+'" data-no="'+nomorRow+'">';
                         body += '<table class="table">';
                        $(res).each(function(idl,val){
                          console.log(val)
                          sub = 'onclick="tab_menu(this)"';
                          if(val.next_cat == '0'){
                            sub ='<td> <a href="javascript:void(0)"  onclick="tab_menu_select(this)" title="Save" id="yesAdd"><i class="fa fa-plus"></i></a></td>';
                            sub = 'onclick="tab_menu_select(this)" data-id = "'+val.id+'" data-name="'+val.name+'"';
                          }
                          body +='<tr ><td '+sub+' data-param="'+val.id+'" data-idx="'+nomorRow+'">'+val.name+'</td></tr>';
                        })
    
                          body +='</table></div></div>';
                          $("#"+tablist).append(body);                    
       
      }
    
    function tab_menu_select(param){
    
      $('.coltab').remove();
      nomorRow=0;
      $(target_id).val($(param).data('id'));
      $(target_name).val($(param).data('name'));
    }
    
    
    function category_data(param){
    
       categorys = [
      {
        "id": "1",
        "name": "Buku",
        "parent_id": "0",
        "next_cat": "1"
      },
      {
        "id": "2",
        "name": "Elektronik",
        "parent_id": "0",
        "next_cat": "1"
      },
      {
        "id": "3",
        "name": "Alat Kantor",
        "parent_id": "0",
        "next_cat": "1"
      },
      {
        "id": "4",
        "name": "Novel & Sastra",
        "parent_id": "1",
        "next_cat": "1"
      },
      {
        "id": "5",
        "name": "Buku Anak",
        "parent_id": "1",
        "next_cat": "0"
      },
      {
        "id": "18",
        "name": "Komik",
        "parent_id": "1",
           "next_cat": "0"
      },
      {
        "id": "7",
        "name": "Fantasi",
        "parent_id": "4",
        "next_cat": "0"
      },
      {
        "id": "8",
        "name": "Horor",
        "parent_id": "4",
        "next_cat": "0"
      },
      {
        "id": "7",
        "name": "Cerita Anak",
        "parent_id": "5",
        "next_cat": "0"
      },
      {
        "id": "5",
        "name": "Ilmu Anak",
        "parent_id": "5",
           "next_cat": "0"
      },
      {
        "id": "10",
        "name": "Action",
        "parent_id": "18",
           "next_cat": "0"
      },
      {
        "id": "11",
        "name": "Tv",
        "parent_id": "2",
           "next_cat": "1"
      },
      {
        "id": "12",
        "name": "HandPhone",
        "parent_id": "2",
           "next_cat": "1"
      },
      {
        "id": "13",
        "name": "Android",
        "parent_id": "12",
           "next_cat": "0"
      },
      {
        "id": "14",
        "name": "Ios",
        "parent_id": "12",
        "next_cat": "0"
      },
      {
        "id": "15",
        "name": "Alat Tulis",
        "parent_id": "3",
           "next_cat": "0"
    
      },
      {
        "id": "16",
        "name": "Buku Tulis",
        "parent_id": "3",
           "next_cat": "0"
      },
      {
        "id": "17",
        "name": "LED",
        "parent_id": "11",
        "next_cat": "0"
    
      }
    ];
    
      data = [];
      $(categorys).each(function(idx,val){
        if(val.parent_id == param){
          data.push(val);
        }
      })
    
      return data;
    
    }
    