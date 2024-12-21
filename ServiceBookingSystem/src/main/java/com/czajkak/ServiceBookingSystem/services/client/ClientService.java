package com.czajkak.ServiceBookingSystem.services.client;

import com.czajkak.ServiceBookingSystem.dto.AdDTO;
import com.czajkak.ServiceBookingSystem.dto.AdDetailsForClientDTO;
import com.czajkak.ServiceBookingSystem.dto.ReservationDTO;
import com.czajkak.ServiceBookingSystem.dto.ReviewDTO;

import java.util.List;

public interface ClientService {

    List<AdDTO> getAllAds();

    List<AdDTO> searchAdByName(String name);

    boolean bookService(ReservationDTO reservationDTO);

    AdDetailsForClientDTO getAdDetailsByAdId(Long adId);

    List<ReservationDTO> getAllBookingsByUserId(Long userId);

    Boolean giveReview(ReviewDTO reviewDTO);

}
