import { Component, OnInit } from '@angular/core';
import { TagsApiService } from "../services/tags-api.service";

@Component({
  selector: 'app-user-register-interests',
  templateUrl: './user-register-interests.component.html',
  styleUrls: ['./user-register-interests.component.scss']
})
export class UserRegisterInterestsComponent implements OnInit {
  tagsArr = [];
  searchArr = [];
  selectedTagsArr = [];
  myInput = "";
  constructor(private tagsApiService: TagsApiService) { }

  ngOnInit() {
    this.tagsApiService.getTags()
    .subscribe(
      (data: Array<object>) => {
        console.log("TAGS: ", data)
        this.tagsArr = data;
      },
      err => console.log("there was an error getting the tags", err)
    )
  }

  searchFocus() {
    console.log("we have focus");
    this.setSearchArr();
  }

  setSearchArr() {
    console.log("TAGS ARR: ", this.tagsArr);
    this.searchArr = this.tagsArr.slice();
    for (let i = 0; i < this.selectedTagsArr.length; i++) {
      for(let j = 0; j < this.searchArr.length; j++) {
        if(this.selectedTagsArr[i].Id === this.searchArr[j].Id) {
          this.searchArr.splice(j, 1);
        }
      }
    }
  }

  onInput(event) {
  console.log("Got Input", event);
  let val = event.target.value;
  console.log(val);
  //if statement is to prevent the array being rest when we are doing a cancel event.
  if (this.myInput == '' || val != undefined) {
  this.setSearchArr();
}
  //checks to remove tags that do not match the string entered in the search input.
  if (val && val.trim() !== '') {
    this.searchArr = this.searchArr.filter(function(item) {
      return item.Name.toLowerCase().includes(val.toLowerCase());
    });
    this.searchArr = this.searchArr.filter((elem, index, self) => {
          return index == self.indexOf(elem);
    });
  }
}

cancelTagSearch() {
  this.myInput = "";
  this.searchArr =[];
}
blurSearch() {
  var that = this;
  setTimeout(function() {
    that.searchArr = [];
    that.myInput = "";
  }, 150)
}

addTag(tag) {
  let foundTag = false;
  for(let i = 0; i < this.selectedTagsArr.length; i++) {
    if(tag === this.selectedTagsArr[i]) {
      foundTag = true;
    }
  }
  if(!foundTag) {
    this.selectedTagsArr.push(tag);
    this.tagsApiService.selectedTagArr.next(this.selectedTagsArr);
  }

}

removeTag(tag) {
  for(let i = 0; i < this.selectedTagsArr.length; i++) {
    if(this.selectedTagsArr[i] === tag) {
      this.selectedTagsArr.splice(i, 1);
      this.tagsApiService.selectedTagArr.next(this.selectedTagsArr);
      return;
    }
  }
}

}
