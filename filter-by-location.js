jQuery(document).ready(function(){
     var locations = {
        'Dhaka': ['Mirpur', 'Mohammadpur', 'Uttara', 'Gulshan', 'Tejgaon', 'Rampura', 'Banani', 'Bimanbandar', 'Khilkhet', 'Badda', 'Paltan', 'Motijheel', 'Jatrabari', 'Ramna', 'Dhanmondi', 'New Market', 'Khilgaon', 'Demra', 'Dhaka Cantonment', 'Adabor', 'Sher-e-Bangla Nagar',  ' Pallabi'],
        'Faridpur': ['Alfadanga', 'Bhanga', 'Boalmari', 'Charbhadrasan', 'Madhukhali', 'Nagarkanda', 'Sadarpur', 'Saltha', 'Faridpur Sadar'],
        'Gazipur': ['Gazipur Sadar', 'Kaliakair', 'Kapasia', 'Sreepur', 'Kaliganj'],
        'Gopalganj': ['Gopalganj Sadar', 'Kashiani', 'Kotalipara', 'Muksudpur', 'Tungipara'],
        'Kishoreganj': ['Kuliarchar', 'Hossainpur', 'Pakundia', 'Austagram', 'Karimganj', 'Katiadi', 'Tarail', 'Itna', 'Nikli', 'Mithamain', 'Bhairab', 'Kishoreganj Sadar', 'Bajitpur'],
        'Madaripur': ['Madaripur Sadar', 'Kalkini', 'Rajoir', 'Shibchar'],
        'Manikganj': ['Manikganj Sadar', 'Singair', 'Shivalaya', 'Harirampur', 'Ghior', 'Daulatpur', 'Saturia'],
        'Munshiganj': ['Lohajang', 'Sreenagar', 'Munshiganj', 'Sirajdikhan', 'Tongibari', 'Gazaria'],
        'Narayanganj': ['Narayanganj Sadar', 'Sonargaon', 'Bandar', 'Araihazar', 'Rupganj'],
        'Narsingdi': ['Belabo', 'Monohardi', 'Narsingdi Sadar', 'Palash', 'Shibpur', 'Raipura'],
        'Rajbari': ['Baliakandi', 'Goalanda', 'Pangsha', 'Kalukhali', 'Rajbari Sadar'],
        'Shariatpur': ['Shariatpur Sadar', 'Damudya', 'Naria', 'Zanjira', 'Gosairhat', 'Shakhipur', 'Bhedarganj'],
        'Tangail': ['Tangail Sadar', 'Sakhipur', 'Basail', 'Madhupur', 'Ghatail', 'Kalihati ', 'Nagarpur ', 'Mirzapur ', 'Gopalpur ', 'Delduar ', 'Bhuapur ', 'Dhanbari'],
    
        'Chatogram': ['Anwara', 'Banshkhali ', 'Boalkhali', 'Chandanaish', 'Fatikchhari', 'Hathazari', 'Karnaphuli', 'Lohagara', 'Mirsharai', 'Patiya', 'Rangunia', 'Raozan', 'Sandwip', 'Satkania', 'Sitakunda', 'Akbar Shah', 'Bakalia', 'Bandar', 'Bayazid Bostami', 'Chandgaon', 'Chawkbazar', 'Double Mooring', 'EPZ', 'Halishahar', 'Karnaphuli', 'Khulshi', 'Pahartali', 'Panchlaish', 'Patenga', 'Sadarghat',  ' Chittagong Kotwali '],
        'Bandarban': ['Bandarban Sadar', 'Thanchi', 'Lama', 'Naikhongchhari', 'Ali kadam', 'Rowangchhari ', 'Ruma'],
        'Brahmanbaria': ['Brahmanbaria Sadar', 'Kasba', 'Akhaura', 'Ashuganj', 'Bancharampur', 'Bijoynagar ', 'Nasirnagar ', 'Nabinagar ', 'Sarail'],
        'Chandpur': ['Chandpur Sadar', 'Faridganj', 'Haimchar', 'Hajiganj', 'Kachua', 'Matlab Dakshin', 'Matlab Uttar', 'Shahrasti'],
        'Comilla': ['Barura', 'Brahmanpara', 'Burichong', 'Comilla Sadar', 'Comilla Sadar Dakshin', 'Chandina', 'Chauddagram', 'Debidwar', 'Homna', 'Laksam', 'Lalmai', 'Monohorgonj', 'Meghna', 'Muradnagar', 'Nangalkot', 'Titas', 'Daudkandi'],
        'Coxs Bazar': ['Chakaria', 'Coxs Bazar Sadar', 'Kutubdia', 'Maheshkhali', 'Ramu', 'Teknaf', 'Ukhia', 'Pekua'],
        'Feni': ['Feni Sadar', 'Daganbhuiyan', 'Chhagalnaiya', 'Sonagazi', 'Parshuram', 'Fulgazi'],
        'Khagrachhari': ['Dighinala', 'Khagrachhari Sadar', 'Lakshmichhari', 'Mahalchhari', 'Manikchhari', 'Panchhari', 'Ramgarh', 'Guimara', 'Matiranga'],
        'Lakshmipur': ['Lakshmipur Sadar', 'Ramganj', 'Raipur', 'Ramgati', 'Kamalnagar'],
        'Noakhali': ['Noakhali Sadar', 'Senbagh', 'Begumganj', 'Chatkhil', 'Companiganj', 'Hatiya', 'Kabirhat', 'Sonaimuri', 'Suborno Char'],
        'Rangamati': ['Rangamati Sadar', 'Belaichhari', 'Bagaichhari', 'Barkal', 'Juraichhari', 'Rajasthali', 'Kaptai', 'Langadu', 'Naniarchar', 'Kaukhali'],
    
        'Sylhet': ['Balaganj', 'Beanibazar', 'Bishwanath', 'Companiganj', 'Dakshin Surma', 'Fenchuganj', 'Golapganj', 'Gowainghat', 'Jaintiapur', 'Kanaighat', 'Osmani Nagar', 'Sylhet Sadar', 'Zakiganj'],
        'Habiganj': ['Ajmiriganj', 'Baniachang', 'Bahubal', 'Chunarughat', 'Habiganj Sadar', 'Lakhai', 'Madhabpur', 'Nabiganj', 'Sayestaganj'],
        'Moulvibazar': ['Moulvibazar Sadar', 'Kamalganj', 'Kulaura', 'Rajnagar', 'Sreemangal', 'Barlekha', 'Juri '],
        'Sunamganj': ['Bishwamvarpur', 'Chhatak', 'Dakshin Sunamganj', 'Derai', 'Dharamapasha', 'Dowarabazar', 'Jagannathpur', 'Jamalganj', 'Sullah', 'Sunamganj Sadar', 'Tahirpur'],
    
        'Khulna': ['Dumuria', 'Batiaghata', 'Dacope', 'Phultala', 'Dighalia', 'Koyra', 'Terokhada', 'Rupsha', 'Paikgachha'],
        'Bagerhat': ['Bagerhat Sadar', 'Chitalmari', 'Fakirhat', 'Kachua', 'Mollahat', 'Mongla', 'Morrelganj', 'Rampal', 'Sarankhola'],
        'Chuadanga': ['Alamdanga', 'Chuadanga Sadar', 'Jibannagar', 'Damurhuda', 'Darsana'],
        'Jessore': ['Abhaynagar', 'Bagherpara', 'Chaugachha', 'Jhikargachha', 'Keshabpur', 'Jessore Sadar', 'Manirampur', 'Sharsha'],
        'Jhenaidah': ['Jhenaidah Sadar', 'Maheshpur', 'Kaliganj', 'Kotchandpur', 'Shailkupa', 'Harinakunda'],
        'Kushtia': ['Bheramara', 'Daulatpur', 'Khoksa', 'Kumarkhali', 'Kushtia Sadar', 'Mirpur'],
        'Magura': ['Magura Sadar', 'Mohammadpur', 'Shalikha', 'Sreepur'],
        'Meherpur': ['Gangni', 'Meherpur Sadar', ' Mujibnagar'],
        'Narail': ['Narail Sadar', 'Kalia', ' Lohagara'],
        'Satkhira': ['Satkhira Sadar', 'Assasuni', ' Debhata', 'Tala', 'Kalaroa', 'Kaliganj', 'Shyamnagar'],
    
        'Barishal': ['Agailjhara', 'Babuganj', 'Bakerganj', 'Banaripara', 'Barisal Sadar', 'Gournadi', 'Hizla', 'Mehendiganj', 'Muladi', 'Wazirpur'],
        'Barguna': ['Amtali', 'Bamna', 'Barguna Sadar', 'Betagi', 'Patharghata', 'Taltali'],
        'Bhola': ['Bhola Sadar', 'Daulatkhan', 'Burhanuddin', 'Tazumuddin', 'Lalmohan', 'Char Fasson', 'Manpura'],
        'Jhalokati': ['Jhalokati Sadar', 'Kathalia', 'Nalchity', 'Rajapur'],
        'Patuakhali': ['Bauphal', 'Galachipa', 'Dashmina', 'Kalapara', 'Mirzaganj', 'Patuakhali Sadar', 'Dumki', 'Rangabali'],
        'Pirojpur': ['Bhandaria', 'Kawkhali', 'Mathbaria', 'Nazirpur', 'Nesarabad', 'Pirojpur Sadar', 'Indurkani'],
    
        'Rajshahi': ['Bagha', 'Bagmara', 'Chargha???', 'Durgapur', 'Godagari', 'Mohanpur', 'Paba', 'Puthia', 'Tanore', 'Boalia', 'Matihar', 'Rajpara', 'Shah Makdam', 'Chandrima', 'Katakhali', 'Belpukur', 'Airport', 'Kashiadanga', 'Kornohar', 'Damkura'],
        'Bogra': ['Adamdighi', 'Bogra Sadar', 'Sherpur', 'Dhunat', 'Dhupchanchia', 'Gabtali', 'Kahaloo', 'Nandigram', 'Shajahanpur', 'Sariakandi', 'Shibganj', 'Sonatala'],
        'Joypurhat': ['Joypurhat Sadar', 'Akkelpur', 'Kalai', 'Khetlal', 'Panchbibi'],
        'Naogaon': ['Atrai', 'Badalgachhi', 'Dhamoirhat', 'Manda', 'Naogaon Sadar', 'Niamatpur', 'Patnitala', 'Porsha', 'Raninagar', 'Sapahar', 'Mohadevpur'],
        'Natore': ['Gurudaspur', 'Natore Sadar', 'Baraigram', 'Bagatipara', 'Lalpur', 'Singra', 'Naldanga'],
        'Chapainawabganj': ['Bholahat', 'Gomastapur', 'Nachole', 'Chapainawabganj', 'Shibganj', 'Rohanpur'],
        'Pabna': ['Atgharia', 'Bera', 'Bhangura', 'Chatmohar', 'Faridpur', 'Ishwardi', 'Pabna Sadar', 'Shathia', 'Sujanagar'],
        'Sirajganj': ['Sirajganj Sadar', 'Kazipur', 'Ullahpara', 'Shahjadpur', 'Raiganj', 'Kamarkhanda', 'Tarash', 'Belkuchi', 'Chauhali'],
    
        'Rangpur': ['Badarganj', 'Mithapukur', 'Gangachara', 'Kaunia', 'Rangpur Sadar', 'Pirgacha', 'Pirganj', 'Taraganj'],
        'Dinajpur': ['Biral', 'Birampur', 'Birganj', 'Bochaganj', 'Chirirbandar', 'Dinajpur Sadar', 'Ghoraghat ', 'Hakimpur ', 'Kaharole ', 'Khansama ', 'Nawabganj ', 'Parbatipur ', 'Fulbari'],
        'Gaibandha': ['Fulchhari', 'Gaibandha Sadar', 'Gobindaganj', 'Palashbari', 'Sadullapur', 'Sundarganj', 'Saghata'],
        'Kurigram': ['Kurigram Sadar', 'Nageshwari', 'Bhurungamari', 'Phulbari', 'Rajarhat', 'Ulipur', 'Chilmari', 'Raomari', 'Char Rajibpur'],
        'Lalmonirhat': ['Lalmonirhat Sadar', 'Aditmari', 'Kaliganj', 'Hatibandha', 'Patgram'],
        'Nilphamari': ['Nilphamari Sadar', 'Saidpur', 'Jaldhaka', 'Kishoreganj', 'Domar', 'Dimla'],
        'Panchagarh': ['Panchagarh Sadar', 'Debiganj', 'Boda', 'Atwari', 'Tetulia'],
        'Thakurgaon': ['Thakurgaon Sadar', 'Baliadangi', 'Haripur', 'Ranisankail', 'Pirganj', 'Ruhea'],
    
        'Mymensingh': ['Mymensingh Sadar', 'Bhaluka', 'Trishal', 'Haluaghat', 'Muktagacha', 'Dhobaura', 'Fulbaria', 'Gaffargaon', 'Gauripur', 'Ishwarganj', 'Nandail', 'Phulpur', 'Tara Khanda'],
        'Jamalpur': ['Dewanganj', 'Baksiganj', 'Islampur', 'Jamalpur Sadar', 'Madarganj', 'Melandaha', 'Sarishabari'],
        'Netrokona': ['Netrokona Sadar', 'Atpara', 'Barhatta', 'Durgapur', 'Khaliajuri', 'Kalmakanda', 'Kendua', 'Madan', 'Mohanganj', 'Purbadhala'],
        'Sherpur': ['Sherpur Sadar', 'Nalitabari', 'Sreebardi', 'Jhenaigati', 'Nakla'],

    }
    
    // Don't chanage anything from here
    
    jQuery(document).on("change", "#seller_city", function (e) {
        
        jQuery(".pbsl-message").html('');
        var $locations = jQuery('#seller_location');
        var country = jQuery(this).val(), lcns = locations[country] || [];
        
        var html = jQuery.map(lcns, function(lcn){
            return '<option value="' + lcn + '">' + lcn + '</option>'
        }).join('');
        
        $locations.html(html)
    });
    
    jQuery(document).on("change", "#seller_location", function (e) {
        jQuery(".pbsl-message").html('');
    });
    
    
    // Filter product via ajax
    
    jQuery(document).on("submit", ".location-filter", function (e) {
        e.preventDefault();
        
        var sellerCity = jQuery("#seller_city").val();
        var sellerLocation = jQuery("#seller_location").val();
        var productContainer = jQuery(".products");
        var customMessage = jQuery(".pbsl-message");
        var loader = jQuery(".pbsl-loader");
        var pagination = jQuery(".woocommerce-pagination");
        
        if(sellerCity.length > 0 && sellerLocation.length > 0){
            
            jQuery.ajax({
                type       : "POST",
                data       : {
                    action : 'pbsl_ajax',
                    seller_city: sellerCity,
                    seller_location: sellerLocation
                },
                dataType   : "html",
                url        : pbsl_object.ajax_url,
                beforeSend : function(){
                    customMessage.html('');
                    loader.show();
                },
                success    : function(data){
                    loader.hide();
        
                    if(data == 'no vendor'){
                        customMessage.html('<p style="color:red;">No product found in selected location.</p>');
                    }
                    else if(data == 'no product'){
                        customMessage.html('<p style="color:red;">No product found in selected location.</p>');
                    }
                    else{
                        pagination.hide();
                        productContainer.fadeOut();
                        productContainer.html(data);
                        productContainer.fadeIn();
                    }
                    
                },
                complete: function(){
                },
                error : function(jqXHR, textStatus, errorThrown) {
                    loader.hide();
                }
            
            }); // End load post ajax request
        }
        else{
            customMessage.html('<p style="color:red;">Select city and location.</p>');
        }
        
    })
    
});