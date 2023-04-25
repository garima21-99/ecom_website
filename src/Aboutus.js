import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Aboutus.css';

export default function FixedContainer() {
  return (
   <>
   <div class="feat bg-gray pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="section-head col-sm-12">
          <h4><span>Why Choose</span> Us?</h4>
          <p>If you're looking for branded and promotional clothing, it's worth choosing your supplier with care. With Brand My Clothing you'll enjoy the best possible products, quality, service and support – guaranteed!.</p>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_one"><i class="fa fa-globe"></i></span>
            <h6>Outstanding products at competitive prices</h6>
            <p>We're proud to develop enduring supplier relationships that keep quality high and prices keen. We’ll never cut corners: instead, we’ll take the extra steps that keep our customers happy, time after time..</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-anchor"></i></span>
            <h6>Orders of any size welcome</h6>
            <p>With huge stock levels, we can service organisations of all sizes, from small businesses to large schools and colleges, government bodies and global brands. At Brand My Clothing, consignment volume and delivery distance are no object!.</p>
          </div>
        </div>
        
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_four"><i class="fa fa-database"></i></span>
            <h6>Superb in-house design and production facilities</h6>
            <p>With huge stock levels, we can service organisations of all sizes, from small businesses to large schools and colleges, government bodies and global brands. At Brand My Clothing, consignment volume and delivery distance are no object!</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_five"><i class="fa fa-upload"></i></span>
            <h6>Friendly, helpful and professional service</h6>
            <p>At Brand My Clothing we combine all the convenience of online selection and ordering with the best in personal, attentive customer care. Why wouldn't we? By being the best, our reputation grows and grows. Everyone’s happy!.</p>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</>
  );
}