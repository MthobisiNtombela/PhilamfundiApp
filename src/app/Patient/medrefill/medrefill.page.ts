import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Collection {
  medication: string;
  collectionDate: Date;
  time: string;
  status: string;
  progress: number;
}

@Component({
  selector: 'app-medrefill',
  templateUrl: './medrefill.page.html',
  styleUrls: ['./medrefill.page.scss'],
})
export class MedrefillPage implements OnInit {
  collections: Collection[] = [
    {
      medication: 'Medication A',
      collectionDate: new Date('2024-05-25T15:16:00'),
      time: '15:16 AM - 16:00 AM',
      status: 'Pending',
      progress: 0
    }, 
    {
      medication: 'Medication B',
      collectionDate: new Date('2024-06-02T14:00:00'),
      time: '02:00 PM - 02:30 PM',
      status: 'Pending',
      progress: 0
    }
  ];
  filteredCollections: Collection[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const collectionData = navigation.extras.state['collectionData'];
      if (collectionData) {
        this.collections.push(collectionData);
      }
    }
    this.filteredCollections = this.collections;
    setInterval(() => this.updateCollectionProgress(), 1000); // Update every second
  }

  segmentChanged(event: any) {
    const segmentValue = event.detail.value;
    const today = new Date().toISOString().split('T')[0];
    if (segmentValue === 'today') {
      this.filteredCollections = this.collections.filter(col => col.collectionDate.toISOString().split('T')[0] === today);
    } else {
      this.filteredCollections = this.collections;
    }
  }

  cancelCollection(collection: Collection) {
    this.collections = this.collections.filter(col => col !== collection);
    this.filteredCollections = this.collections;
  }

  postponeCollection(collection: Collection) {
    // Implement postponing logic here
  }

  updateCollectionProgress() {
    const now = new Date();
    this.filteredCollections.forEach(collection => {
      const collectionDate = new Date(collection.collectionDate);
      const totalDuration = 30 * 60 * 1000; // 30 minutes in milliseconds
      const timeLeft = collectionDate.getTime() - now.getTime();
      if (timeLeft > 0 && timeLeft <= totalDuration) {
        collection.status = 'Approaching';
        collection.progress = ((totalDuration - timeLeft) / totalDuration) * 100;
      } else if (timeLeft <= 0) {
        collection.status = 'Past Due';
        collection.progress = 100;
      } else {
        collection.status = 'Pending';
        collection.progress = 0;
      }
    });
  }
}
