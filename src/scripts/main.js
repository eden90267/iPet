const REQUEST_URL = 'http://163.29.157.32:8080/dataset/6a3e862a-e1cb-4e44-b989-d35609559463/resource/f4a75ba9-7721-4363-884d-c3820b0b917c/download/f35d4fbee8bf44d9ada96a926dbe41f5.json';

(function () {
	fetch(REQUEST_URL)
	.then((response) => {
		return response.json();
	})
	.then((json) => {
		(function () {
			let str = '';
			json.map((value, index) => {
				str +=
				`
				  <div class="col-sm-6 col-md-4">
				    <div class="thumbnail">
				      <img class="thumbnail-image" src="${value.ImageName}" alt="...">
				      <div class="caption">
				        <h3>${value.Variety} ${value.Name} <span class="label label-default">${value.HairType}</span></h3>
				        <p class="ellipsis">${value.Resettlement}</p>
				        <p><a href="tel:${value.Phone}" class="btn btn-primary" role="button">聯絡電話</a> <a href="mailto:${value.Email}" class="btn btn-default" role="button">聯絡信箱</a></p>
				      </div>
				    </div>
				  </div>
				`;
			});
			document.querySelector('#data-list').innerHTML = str;
		})();
	})
})();