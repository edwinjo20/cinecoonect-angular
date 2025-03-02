import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moderation',
  standalone: true,
  templateUrl: './moderation.component.html',
  imports: [CommonModule],

})
export class ModerationComponent implements OnInit {
  comments: any[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.loadComments();
  }
  approveComment(comment: any): void {
    this.commentService.approveComment(comment.id).subscribe({
      next: () => {
        alert('Comment approved successfully!');
        comment.approved = true; // ✅ Update UI immediately
        setTimeout(() => this.loadComments(), 1000); // ✅ Refresh after 1 sec
      },
      error: (error) => {
        console.error('Error approving comment:', error);
        alert('Failed to approve comment');
      },
    });
  }
  
  rejectComment(comment: any): void {
    this.commentService.rejectComment(comment.id).subscribe({
      next: () => {
        alert('Comment rejected successfully!');
        comment.approved = false; // ✅ Update UI immediately
        setTimeout(() => this.loadComments(), 1000); // ✅ Refresh after 1 sec
      },
      error: (error) => {
        console.error('Error rejecting comment:', error);
        alert('Failed to reject comment');
      },
    });
  }
  
  
  loadComments(): void {
    this.commentService.getComments().subscribe({
      next: (comments) => {
        this.comments = comments;
      },
      error: (error) => {
        console.error('Error loading comments:', error);
      },
    });
  }
  
}
